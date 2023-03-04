import Dialog from "@components/design/Dialog";
import React, { ChangeEvent, useEffect, useState } from "react";
import PeopleIcon from "@icons/people_icon.svg";
import AddLocationIcon from "@icons/add_location_icon.svg";
import { Autocomplete, TextField, TextareaAutosize } from "@mui/material";
import { getCurrentUser } from "src/utils/helper";
import { CityDataInterface, UserDataInterface } from "src/models/Timeline";
import sampleUser from "src/utils/sample";
import AddEmojiIcon from "@icons/add_emoji_icon.svg";
import AddImageIcon from "@icons/add_image_icon.svg";
import Button from "@components/design/Button";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";
import { getAllCities, useAddPost, useGetCategories, useGetUser } from "src/services/Timeline";
import { CommunityListInterface } from "../../../../models/Home.d";
import ClosePostDialog from "./ClosePostDialog";
import AddCityIcon from "@icons/add_city_icon.svg";

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}
const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ open, onClose }) => {
  const { data: currentUser } = useGetUser();
  const [postText, setPostText] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState<CityDataInterface | null>(null);
  const [citiesOption, setCitiesOption] = useState<CityDataInterface[]>([]);
  const [imageURL, setImageURL] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<CommunityListInterface[]>([]);
  const [openClosePostDialog, setOpenClosePostDialog] = useState(false);
  const [searchCity, setSearchCity] = useState("");

  const { data: categories } = useGetCategories();

  const onPostAdded = () => {
    setPostText("");
    setLocation("");
    setCity(null);
    setImageURL([]);
    setImageFiles([]);
    setSelectedCategories([]);
    onClose();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchCity) {
        getAllCities(searchCity).then((res) => {
          setCitiesOption(res);
        });
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchCity]);

  const addPostHandler = useAddPost(onPostAdded);

  const closeDialogHandler = () => {
    if (postText || location || imageURL.length || selectedCategories.length || city) {
      setOpenClosePostDialog(true);
    } else {
      onClose();
    }
  };

  console.log("imageUrl", imageURL, "imageFiles", imageFiles);
  const removeImageHandler = (url: string) => {
    const getRemovedImageIndex = imageURL.findIndex((imageUrl) => imageUrl === url);
    setImageURL(
      imageURL.slice(0, getRemovedImageIndex).concat(imageURL.slice(getRemovedImageIndex + 1))
    );
    setImageFiles(
      imageFiles.slice(0, getRemovedImageIndex).concat(imageFiles.slice(getRemovedImageIndex + 1))
    );
  };

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const imagesUploaded = [...imageURL];
      const currentImageFiles = [...imageFiles];
      for (let i = 0; i < event.target.files.length; i++) {
        imagesUploaded.push(URL.createObjectURL(event.target.files[i]));
        currentImageFiles.push(event.target.files[i]);
      }
      while (imagesUploaded.length > 4) {
        imagesUploaded.shift();
        currentImageFiles.shift();
      }
      setImageURL(imagesUploaded);
      setImageFiles(currentImageFiles);
    }
  };

  if (!currentUser) {
    return <></>;
  } else {
    return (
      <>
        <Dialog open={open} maxWidth="md" onClose={closeDialogHandler}>
          <div className="flex justify-between items-center w-full px-10 py-3 border-b border-primary-500">
            <p>Buat post baru</p>
            <p onClick={closeDialogHandler}>&#9587;</p>
          </div>
          <div className="my-4 flex ml-9 gap-2 items-center">
            {currentUser.users.thumbnail ? (
              <Image
                src={currentUser.users.thumbnail}
                loader={() => currentUser.users.thumbnail!}
                width={40}
                height={40}
								alt="profile-pic"
								className="rounded-full"
              />
            ) : (
              <PeopleIcon />
            )}
            <div className="flex flex-col">
              <p className="font-bold text-primary-800 mb-2">{currentUser.users.user_name}</p>
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <AddCityIcon />
                  <Autocomplete
                    options={citiesOption}
                    value={city}
                    onChange={(e, value) => setCity(value)}
                    inputValue={searchCity}
                    isOptionEqualToValue={(option, value) => option.name === value.name}
                    getOptionLabel={(option) => option && option.name}
                    onInputChange={(e, value) => setSearchCity(value)}
                    filterOptions={(x) => x}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <input
                          {...params.inputProps}
                          placeholder="Tambah kota"
                          className="outline-none"
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex gap-2">
                  <AddLocationIcon />
                  <input
                    type="text"
                    className="outline-none"
                    placeholder="Tambah lokasi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full box-border px-10">
            <div className="h-[240px] overflow-auto scrollbar-hide">
              <TextareaAutosize
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                name="post-text"
                id="post-text"
                cols={50}
                className={`w-[520px] outline-none text-justify whitespace-normal overflow-auto scrollbar-hide`}
                placeholder="Ceritakan perjalanan kamu"
              />
              <div className="grid grid-cols-2 gap-2">
                {imageURL.length ? (
                  imageURL.map((url) => (
                    <div className="rounded-lg relative" key={url}>
                      <div
                        className="absolute top-2 right-2 z-20 w-6 h-6 hover:cursor-pointer hover:bg-grayscale-400 rounded-full flex items-center justify-center text-[6px] bg-grayscale-500 text-white font-bold"
                        onClick={() => removeImageHandler(url)}
                      >
                        &#9587;
                      </div>
                      <Image
                        src={url}
                        unoptimized
                        loader={() => url}
                        width={256}
                        height={200}
                        alt="preview image"
                        className="object-cover rounded-xl"
                      />
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="border-b border-primary-500"></div>
            <div className="my-6">
              <Autocomplete
                multiple
                options={categories || []}
                getOptionLabel={(option) => option.title}
                value={selectedCategories}
                onChange={(e, option) => setSelectedCategories(option)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    color="primary"
                    label="Kategori"
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Kategori"
                  />
                )}
              />
            </div>
            <div className="flex justify-between mb-4 items-center">
              <div className="gap-4 flex relative">
                <label>
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="hidden"
                    accept="image/png,image/jpeg,video/mp4,video/x-m4v,video/*"
                    multiple
                  />
                  <AddImageIcon />
                </label>
              </div>
              <Button
                variant="contained"
                className="rounded-lg py-3 w-[120px] text-xs font-bold"
                disabled={!postText || !location || !selectedCategories.length}
                onClick={() =>
                  addPostHandler.mutate({
                    postText,
                    location,
                    media_files: imageFiles,
                    categories: selectedCategories,
                  })
                }
              >
                Post
              </Button>
            </div>
          </div>
        </Dialog>
        <ClosePostDialog
          open={openClosePostDialog}
          onDiscard={() => {
            onPostAdded();
            setOpenClosePostDialog(false);
          }}
          onSaveAsDraft={() => {
            onClose();
            setOpenClosePostDialog(false);
          }}
        />
      </>
    );
  }
};

export default CreatePostDialog;
