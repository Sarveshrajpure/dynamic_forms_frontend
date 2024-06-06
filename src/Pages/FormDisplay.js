import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getFromConfig } from "../Actions/formActions";
import {
  CheckboxList,
  DatePicker,
  DropdownSingle,
  ImageInput,
  PDFInput,
  RadioList,
  TextInput,
  VideoInput,
} from "oolib";

import BarLoader from "react-spinners/BarLoader";

const FormDisplay = () => {
  const formConfig = useQuery({
    queryKey: ["configData"],
    queryFn: getFromConfig,
  });

  console.log(formConfig.error);

  console.log(formConfig.data);

  const getComp = (item) => {
    let comp = item.comp;
    let props = item.props;

    switch (comp) {
      case "TextInput":
        return (
          <TextInput isRequired={item.isRequired} {...props} onChange={function noRefCheck() {}} />
        );
      case "DropdownSingle":
        return <DropdownSingle isRequired={item.isRequired} {...props}></DropdownSingle>;
      case "CheckboxList":
        return (
          <CheckboxList
            isRequired={item.isRequired}
            {...props}
            onChange={function noRefCheck() {}}
            options={props.options}
          />
        );
      case "RadioList":
        return (
          <RadioList isRequired={item.isRequired} {...props} onChange={function noRefCheck() {}} />
        );
      case "DatePicker":
        return (
          <DatePicker isRequired={item.isRequired} {...props} onChange={function noRefCheck() {}} />
        );
      // case "PDFInput":
      //   return (
      //     <PDFInput isRequired={item.isRequired} {...props} onChange={function noRefCheck() {}} />
      //   );
      // case "VideoInput":
      //   return (
      //     <VideoInput
      //       enableVideoUpload
      //       label="Video Component"
      //       onChange={function noRefCheck() {}}
      //       sublabel="Paste your video link or upload video"
      //     />
      //   );

      // case "ImageInput":
      //   return <ImageInput isRequired={item.isRequired} valuePath={item.valuePath} />;

      default:
        return <div></div>;
    }
  };
  return (
    <div>
      <div className="heading text-center text-2xl text-[#33A4FF] font-semibold p-2">
        Dynamic Forms
      </div>
      <div className="flex justify-center h-full ">
        {formConfig.isLoading ? (
          <div className="flex justify-center items-center h-full">
            <BarLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="flex flex-col w-[50%]">
            {formConfig.error ? (
              <div className=" text-red-500 font-semibold flex justify-center items-center h-full">
                Error - {formConfig.error.message}!
              </div>
            ) : (
              <>
                {formConfig.data?.map((item) => (
                  <div className="my-8 pb-5" key={item.props.id}>
                    {getComp(item)}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDisplay;
