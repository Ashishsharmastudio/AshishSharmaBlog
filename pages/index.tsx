import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from "../sanity";
import { post } from "../personalblog/typing";
import Link from "next/link";

interface Props {
  posts: post[];
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <div>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}

        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}

        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>

        {/* ============ Post Part Start here ========== */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post.slug.current`}>
              <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group">
                <div key={post._id}>
                  {post.mainImage && (
                    <>
                      {urlFor(post.mainImage).width(380).height(350).url() && (
                        <>
                   // Add your image component or markup here
                   // For example:
                   //   `<img src={urlFor(post.mainImage).width(380).height(350).url()} alt={post.title} />`
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* ================================================== */}


        {/* ==================== Footer Start here==================*/}
        <Footer />
       /* ==================== Footer End Here=================== */

      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
          _id,
          title,
          Author -> {
            name,
            image
          },
          description,
          mainImage,
          slug
        }`;

  const posts: post[] = await sanityClient.fetch(query);

  return {
    props: {
      posts
    }
  };
};