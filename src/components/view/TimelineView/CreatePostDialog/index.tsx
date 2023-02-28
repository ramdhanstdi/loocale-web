import Dialog from "@components/design/Dialog";
import React, { useEffect, useState } from "react";
import PeopleIcon from "@icons/people_icon.svg";
import AddLocationIcon from "@icons/add_location_icon.svg";
import { Autocomplete, TextField } from "@mui/material";
import { getCurrentUser } from "src/utils/helper";
import { UserDataInterface } from "src/models/Timeline";
import sampleUser from "src/utils/sample";
import AddEmojiIcon from "@icons/add_emoji_icon.svg";
import AddImageIcon from "@icons/add_image_icon.svg";
import Button from "@components/design/Button";

interface CreatePostDialogProps {
  open: boolean;
  onClose: () => void;
}
const CreatePostDialog: React.FC<CreatePostDialogProps> = ({
  open,
  onClose,
}) => {
  const [user, setUser] = useState<UserDataInterface>(sampleUser);

  useEffect(() => {
    setUser(getCurrentUser() as UserDataInterface);
  }, []);
  const options = [{
		title: "Hello"
	}, {
		title: "World"
	}];

  return (
    <Dialog open={open} maxWidth="md" onClose={onClose}>
      <div className="flex justify-between items-center w-full px-10 py-3 border-b border-primary-500">
        <p>Buat post baru</p>
        <p onClick={onClose}>&#9587;</p>
      </div>
      <div className="my-4 flex ml-9 gap-2">
        <PeopleIcon />
        <div className="flex flex-col">
          <p className="font-bold text-primary-800 mb-2">
            {user ? user.user_name : "Guest"}
          </p>
          <div className="flex gap-2">
            <AddLocationIcon />
            <input
              type="text"
              className="outline-none"
              placeholder="Tambah kota"
            />
          </div>
        </div>
      </div>
      <div className="w-full box-border px-10">
        <div className="h-[240px] overflow-auto scrollbar-hide">
          <textarea
            name="post-text"
            id="post-text"
            cols={30}
            rows={10}
            className={`w-[520px] outline-none text-justify whitespace-normal overflow-auto scrollbar-hide`}
            placeholder="Ceritakan perjalanan kamu"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            omnis, autem, perferendis voluptates ut aut suscipit fugiat soluta
            laboriosam, tempore quia labore esse mollitia. Id, hic molestias.
            Error, aperiam officiis.
          </p>
        </div>
        <div className="border-b border-primary-500"></div>
        <div className="my-6">
          <Autocomplete
						multiple
            options={options}
						getOptionLabel={(option) => option.title}
						defaultValue={[options[0]]}
						isOptionEqualToValue={(option, value) => option.title === value.title}
            renderInput={(params) => (
							<TextField
								{...params}
								className="w-[200px]"
								color="primary"
								label="Kategori"
								variant="outlined"
								size="small"
								placeholder="Kategori"
							/>
						)}
          />
        </div>
        <div className="flex justify-between mb-4 items-center">
          <div className="gap-4 flex">
            <AddEmojiIcon />
            <AddImageIcon />
          </div>
          <Button
            variant="contained"
            className="rounded-lg py-3 w-[120px] text-xs font-bold"
            onClick={() => {}}
          >
            Post
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default CreatePostDialog;
