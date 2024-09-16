import Image from "next/image";

export const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-blue-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam.
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
              amet
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
