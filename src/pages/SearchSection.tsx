import React from "react";

export default function SearchSection() {
  return (
    <section className="flex-auto self-end mt-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex items-center justify-end gap-5 max-md:flex-col">
        <div className="max-md:ml-0 max-md:w-full">
          <div className="py-12 pr-6 pl-14 mx-auto w-full bg-white rounded-[139px] max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <div className="flex items-center justify-between gap-5 max-md:flex-col">
              <div className="w-[32%] max-md:ml-0 max-md:w-full">
                <h3 className="self-stretch my-auto text-4xl font-medium text-black max-md:mt-10">
                  Fast insight
                </h3>
              </div>
              <div className="ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-3 items-center max-md:mt-10">
                  <div className="flex gap-5 self-stretch px-6 py-8 text-2xl font-medium whitespace-nowrap bg-neutral-100 rounded-[83px] text-neutral-400 max-md:px-5">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a631e4c1da67674545ddc7dd18b7081bd0433371?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                      alt="Search icon"
                      className="object-contain shrink-0 my-auto w-6 aspect-square"
                    />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="bg-transparent outline-none"
                    />
                  </div>
                  <button className="flex flex-col justify-center items-center self-stretch px-5 my-auto bg-blue-600 h-[90px] rounded-[78px] w-[90px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/09ff8fd9ccf7489619bf186645607b79a5874192?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                      alt="Primary action"
                      className="object-contain w-8 aspect-square"
                    />
                  </button>
                  <button className="flex flex-col justify-center items-center self-stretch px-5 my-auto bg-neutral-100 h-[90px] rounded-[78px] w-[90px]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb6ca00148c039ce50f9c72208ec1efdf606c89?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                      alt="Secondary action"
                      className="object-contain w-8 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <button className="grow px-14 py-12 w-full text-4xl font-medium text-white bg-blue-600 rounded-[139px] max-md:px-5 max-md:mt-8">
            Predict Outcome
          </button>
        </div>
      </div>
    </section>
  );
}
