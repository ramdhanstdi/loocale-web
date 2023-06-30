import {
  FilterPartners,
  Header,
  ListPartners,
} from "@components/view/PartnersView";
import { PartnersInterface } from "@components/view/PartnersView/interfaces";
import BottomNavbar from "@components/view/TimelineView/BottomNavbar";
import LeftPanel from "@components/view/TimelineView/LeftPanel";
import RightPanel from "@components/view/TimelineView/RightPanel";
import Head from "next/head";
import { FC, useCallback, useEffect, useState } from "react";
import request from "src/services/request";
import useWindowDimensions from "src/utils/hooks";

interface PartnersProps {}

const Partners: FC<PartnersProps> = ({}) => {
  const [province, setProvince] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true); //
  const [data, setData] = useState<PartnersInterface[]>([]);
  const { width } = useWindowDimensions();

  /**
   * @description handle get partner
   *
   * @return {PartnersInterface[]}
   */
  const getPartner = useCallback(
    async (categories: string, provinsi: string) =>
      request
        .get<PartnersInterface[]>(
          `/partners?category=${categories || ""}&provinsi=${provinsi || ""}`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
          return res.data;
        })
        .catch((err) => {
          setLoading(false);
          return null;
        }),
    []
  );

  /**
   * @description handle click filter
   *
   * @return {void}
   */
  const filterClick = useCallback(() => {
    getPartner(category, province);
  }, [category, getPartner, province]);

  /**
   * @description handle click see more
   *
   * @return {void}
   */
  const seeAllClick = useCallback(
    (value: string) => {
      getPartner(value, "");
      setCategory(value);
    },
    [getPartner]
  );

  useEffect(() => {
    getPartner("", "");
  }, [getPartner]);
  return (
    <>
      <Head>
        <title>Partners </title>
      </Head>
      <div className="max-h-screen max-w-screen flex justify-between box-border">
        {width && width >= 1000 && <LeftPanel />}
        <div className="flex flex-col w-full lg:mx-6 shrink ">
          <div className="mt-2 shadow-md rounded-b-xl">
            <Header />
          </div>
          <div className="px-6 py-[10px] my-4 shadow-md rounded-lg h-[500px] overflow-auto">
            <FilterPartners
              activity={category}
              province={province}
              setActivity={setCategory}
              setProvince={setProvince}
              onClickFilter={filterClick}
            />
            {loading ? (
              <div>loading...</div>
            ) : (
              data?.map((partners) => (
                <ListPartners
                  partners={partners}
                  key={partners.category}
                  category={category}
                  seeAllClick={seeAllClick}
                />
              ))
            )}
          </div>
        </div>
        {width && width < 1000 && <BottomNavbar />}
        {width && width >= 1000 && <RightPanel />}
      </div>
    </>
  );
};

export default Partners;
