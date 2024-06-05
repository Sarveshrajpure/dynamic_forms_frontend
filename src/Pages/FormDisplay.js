import React, { useState } from "react";
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
  BannerAlert,
} from "oolib";

const FormDisplay = () => {
  const formConfig = useQuery({
    queryKey: ["configData"],
    queryFn: getFromConfig,
  });



  console.log(formConfig.data);

  const getComp = (item) => {
    let comp = item.comp;
    let props = item.props;

    console.log(comp);
    switch (comp) {
      case "TextInput":
        return (
          <TextInput
            isRequired={item.isRequired}
            {...props}
            valuePath={item.valuePath}
            onChange={function noRefCheck() {}}
          />
        );
      case "DropdownSingle":
        return (
          <DropdownSingle isRequired={item.isRequired} {...props} valuePath={item.valuePath}>
            {props.options.map((option) => (
              <option value={option.value} label={option.label} key={option.reactKey} />
            ))}
          </DropdownSingle>
        );
      case "CheckboxList":
        return (
          <CheckboxList
            isRequired={item.isRequired}
            {...props}
            onChange={function noRefCheck() {}}
            options={props.options}
            valuePath={item.valuePath}
          />
        );
      case "RadioList":
        return (
          <RadioList
            isRequired={item.isRequired}
            {...props}
            onChange={function noRefCheck() {}}
            options={props.options}
            valuePath={item.valuePath}
          />
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
    <div className="flex justify-center">
      <BannerAlert
        BANNER_STATE={{
          alertState: [],
        }}
        REMOVE_ALERT_BANNER={function noRefCheck() {}}
      />
      {formConfig.isLoading ? (
        "Loading"
      ) : (
        <div className="flex flex-col w-[50%]">
          {" "}
          {formConfig.data.map((item) => (
            <div className="my-8" key={item.props.id}>
              {getComp(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormDisplay;
