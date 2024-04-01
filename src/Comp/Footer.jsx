// import React from 'react'
/* eslint-disable no-unused-vars */
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
function Contect_us() {
  return (
    <div className=" text-white  px-12 py-8 flex flex-col justify-center  items-start">
      <div className="text-3xl mb-3">Contact Us</div>
      <div className="font-bold mb-3">
        Read, study, and learn The Noble Quran. Quran.com is a Sadaqah Jariyah.
      </div>
      <div className="lg:w-[75%] text-left">
        We hope to make it easy for everyone to read, study, and learn The Noble
        Quran. The Noble Quran has many names including Al-Quran Al-Kareem,
        Al-Ketab, Al-Furqan, Al-Maw&apos;itha, Al-Thikr, and Al-Noor.
      </div>
    </div>
  );
}
function Contect_us_form() {
  return (
    <Card className=" text-white px-1 py-8 flex flex-col justify-center  w-2/3 mx-auto my-1">
      <Typography variant="h4" color="blue-gray">
        Contact Us
      </Typography>
      <form className="mt-8 mb-2 max-w-screen-lg ">
        <div className="mb-1 flex flex-col gap-y-6 justify-center">
          <Input
            variant="outlined"
            placeholder="Your name"
            className="!border-t-blue-gray-200 focus:!border-light-blue-600 w-5/6 placeholder-t-blue-gray-400"
            in
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Input
            placeholder="Email"
            className=" !border-t-blue-gray-200 focus:!border-light-blue-600  w-5/6"
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />
          <Input
            size="md"
            placeholder="Your message"
            className=" !border-t-blue-gray-200 focus:!border-light-blue-600  w-5/6 "
            labelProps={{
              className: "before:content-none after:content-none ",
            }}
          />
        </div>
        <Button className="mt-6" color="blue">
          Sned a message
        </Button>
      </form>
    </Card>
  );
}

function Footer() {
  return (
    <div className="bg-[#1f2937] grid grid-cols-2 w-screen">
      <Contect_us />
      <Contect_us_form />
    </div>
  );
}

export default Footer;
