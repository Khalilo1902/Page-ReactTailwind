import illustration from "../assets/illustration.png";

const Main = () => {
  return (
    <main className="w-full mt-8 ">
      <div className="container">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl mb-5 text-center">
              Bring everyoine together to build better products
            </h2>
            <p className=" mb-20 max-w-sm text-darkGrayishBlue text-center">
              Manage make it simple for software teams to plan day-to-day tasks
              whle keeping the larger team goals in view
            </p>
            <a href="#">
              <span className="px-8 py-3 bg-red-700 rounded-xl">
                Get Startet
              </span>
            </a>
          </div>

          <img className="max-w-sm" src={illustration} alt="" />
        </div>
        <div className="wrapper flex justify-between items-center gap-10">
          <div className="wrapper-one flex flex-col items-center justify-center">
            <h2 className="text-3xl mb-4 mt-4 font-bold text-center max-w-sm md:text-left mt-20">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue">
              Manage provides all the functionality your team needs, without the
              complexity. Our sofware is tailor-made for modern digital product
              teams
            </p>
          </div>
          <div className="wrapper-two flex flex-col items-center space-y-8 mt-8 max-w-sm ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
              molestias non velit cumque voluptate pariatur necessitatibus
              praesentium vero veniam beatae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              minima consequatur itaque voluptates voluptate nulla dolore
              officiis incidunt inventore perspiciatis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              doloribus quo consectetur explicabo id voluptatum repellat ipsam
              non temporibus voluptate?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
