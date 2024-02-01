import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typing";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  // console.log(posts);

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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4">
          {
            posts.map((post)=>(
              <Link key={post._id} href={`/post/${post.slug.current}`}>
               <div className="border-[1px] border-secondaryColor border-opacity-40 h-[450px] group">
                 <div className="h-3/5 w-full overflow-hidden">
                   {post.mainImage && (
                    <img 
                     width = {380}
                     height={390}
                     src={urlFor(post.mainImage).url()}
                     alt={post.title}
                     className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110"
                    />
                   )} 
                 </div>
                 <div className="h-2/5 w-full flex flex-col justify-center">
                     <div className="flex justify-between item-center px-4 py-1 border-b-[1px] border-b-gray-500">
                       <p className="font titleFont md:text-xl text-lg uppercase font-bold">{post.title.substring(0, 30)}...</p>
                       <img className="h-12 w-12 rounded-full object-cover" src={urlFor(post.author.image).url()} alt="author img" />
                       
                     </div>
                     <p className="py-2 px-4 text-base">
                       {post.description.substring(0, 50)}....by  - {""}
                       <span className="font-samibold">{post.author.name}</span>
                     </p>
                 </div>
               </div>
              </Link>  
             ))
          }
        </div>
        {/* ================================================== */}








        {/* ==================== Footer Start here==================*/}
        <Footer />
        {/* ==================== Footer End Here=================== */}

      </main>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
          _id,
          title,
          author -> {
            name,
            image
          },
          description,
          mainImage,
          slug
        }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  };
};