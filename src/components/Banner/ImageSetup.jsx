let ImageSetup = () => {
  const dots = Array.from({ length: 12 });

  return (
    <div className="relative w-[95vw] max-w-[420px] aspect-square rounded-full border-2 border-blue-500 flex justify-center items-center mt-16      ">
      <div
        className="absolute inset-0 animate-[spin_15s_linear_infinite]
      "
      >
        {dots.map((__, index) => {
          const angle = index * 30;

          return (
            <div
              key={index}
              className="absolute inset-0"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div
                className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                -translate-y-1/2
                w-3
                h-3
                rounded-full
                bg-blue-600
              "
              />
            </div>
          );
        })}
      </div>
      {/* second */}
      <div className="w-[85%] relative aspect-square rounded-full border-2 border-green-500 flex justify-center items-center ">
        <div
          className="absolute inset-0 
                animate-[spin_15s_linear_infinite_reverse]

        "
        >
          {dots.map((__, index) => {
            const angle = index * 30;

            return (
              <div
                key={index}
                className="absolute inset-0"
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div
                  className="
                absolute
                left-1/2
                top-0
                -translate-x-1/2
                -translate-y-2
                w-3
                h-3
                rounded-full
                bg-linear-to-br
                from-green-300
                to-blue-300
              "
                />
              </div>
            );
          })}
        </div>
        <img
          src="https://career.edu.pk/assets/images/img95.png"
          className="
            w-[95%]
            aspect-square
            rounded-full
            object-cover
          "
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSetup;
