import axios from "axios";
import { GetServerSideProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/layout";
import { HomePageComponent } from "../page-components";
import Seo from "../layout/seo/seo";

const Index = (): JSX.Element => {
  return (
    <Seo>
      <HomePageComponent />
    </Seo>
  );
};
// sds
export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomePageProps> =
  async () => {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,
      { firstCategory: 0 }
    );

    return {
      props: {
        menu,
      },
    };
  };

interface HomePageProps {
  menu: MenuItem[];
}
