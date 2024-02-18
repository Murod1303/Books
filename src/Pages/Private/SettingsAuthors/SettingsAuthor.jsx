export const SettingsAuthor = () => {
  return (
    <>
      <div className="w-full pt-10 h-full">
        <div className="profile__inner w-[1000px] mx-auto ">
          <form className="flex items-center justify-center gap-[100px]">
            <div className="profile__content w-[612px]">
              <h3 className="text-[#DEDEDE] text-xl font-medium mb-3">
                Settings
              </h3>
              <label htmlFor="lang" className="inline-block w-full mb-3">
                <select
                  name="lang"
                  id="lang"
                  className="w-full mb-1 inline-block p-3 rounded-md text-[14px]"
                >
                  <option defaultChecked value="en">
                    English
                  </option>
                  <option value="">Uzbek</option>
                  <option value="">Russian</option>
                </select>
                <span className="text-[#ff0000cc] text-[12px] inline-block mb-1">
                  Please choose language.
                </span>
              </label>
              <div className="">
                <label htmlFor="" className="">
                  <input type="radio" name="lang" id="" />
                  eng
                </label>
                <label htmlFor="">
                  <input type="radio" name="lang" id="" />
                  uz
                </label>
                <label htmlFor="">
                  <input type="radio" name="lang" id="" />
                  ru
                </label>
              </div>
              <button
                className="w-[150px] block ml-auto rounded-md p-3 bg-[#F1F6FF] text-[#0d0d0d] font-semibold text-[13px]"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
