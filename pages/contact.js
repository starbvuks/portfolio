import React from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react";

import Navbar from "../components/Navbar/NavbarContact";

const contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98982hj",
        "template_y9aun0x",
        e.target,
        "user_lKCW2e51zRDvcD36E7iDi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div class="h-screen bg-contactBack">
      <Navbar />
      <div class="flex flex-col items-center mt-40 md:t-20">
        <div class="flex">
          <form onSubmit={sendEmail} class="w-80">
            <div class="flex flex-col">
              <label class="text-md font-poppins font-medium text-contactLight py-1">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="your name"
                class="bg-contactBack2 form-input rounded-lg font-spartan text-gray-800"
              />
            </div>

            <div class="flex flex-col mt-5">
              <label class="text-md font-poppins font-medium text-contactLight py-1 ">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="you@example.com"
                class="bg-contactBack2 form-input mt-1 shadow-sm sm:text-sm rounded-md font-spartan text-gray-800"
              />
            </div>

            <div class="flex flex-col mt-5">
              <label class="text-md font-poppins font-medium text-contactLight py-1">
                Message
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="anything you'd like to tell me"
                className="bg-contactBack2 form-input shadow-sm mt-1 rounded-md font-spartan text-gray-800"
              />
            </div>

            <div class="flex justify-between mt-6">
              <input
                type="submit"
                value="Send"
                class="bg-contactBack2 font-poppins font-semibold text-contactLight px-5 py-2 rounded-lg"
              />
              <div class="flex items-end gap-5">
                <div class="w-9 h-9">
                  <a href="https://www.linkedin.com/in/sarvag-kalari-000346000/">
                    <Icon
                      icon="akar-icons:linkedin-fill"
                      width="100%"
                      height="100%"
                      color="#CCDAD1"
                    />
                  </a>
                </div>
                <div class="w-9 h-9">
                  <a href="https://github.com/starbvuks">
                    <Icon
                      icon="akar-icons:github-fill"
                      width="100%"
                      height="100%"
                      color="#CCDAD1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
