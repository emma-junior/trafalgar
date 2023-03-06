import React from "react";
import Box from "../components/Box";
import HomeNav from "../components/HomeNav";

const HomeScreen = () => {
  return (
    <>
      <HomeNav />
      <div className="container mx-auto px-4">
        <div className="xl:px-32">
          <div className="text-center my-10">
            <h1 className="text-4xl">Figma to React - Pixel perfect</h1>
            <p className="text-xl">
              Click on the figma icon to open the figma file and react page for
              the design
            </p>
          </div>
          <div className="flex flex-wrap">
            <Box
              bgColor={true}
              header={"Tralfagar virtual healthcare"}
              month={"MAR"}
              day={3}
              url={"trafalgar"}
              timeTaken={"4 hours"}
              figmaLink="https://www.figma.com/file/EWmzcVkd7qbP5Nf7iMvuqP/Trafalgar-Landing-Page"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
