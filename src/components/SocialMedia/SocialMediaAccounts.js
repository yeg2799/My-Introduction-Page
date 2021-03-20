import React from 'react'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
    AiFillGithub,
  } from "react-icons/ai";

  import SocialMedia from "./socialMedia";
const SocialMediaAccounts = () => {
    return (
        <div className="menu-social">
            <SocialMedia
                  href="https://www.facebook.com/emre.guzel.3386/"
                  Icon={AiFillFacebook}
                />
                <SocialMedia
                  href="https://www.instagram.com/_emrguzel_/"
                  Icon={AiFillInstagram}
                />
                <SocialMedia
                  href="https://www.linkedin.com/in/emre-g%C3%BCzel-6bb4101a2/"
                  Icon={AiFillLinkedin}
                />
                <SocialMedia
                  href="https://twitter.com/emrex99"
                  Icon={AiFillTwitterSquare}
                />
                <SocialMedia
                  href="https://github.com/yeg2799"
                  Icon={AiFillGithub}
                />
        </div>
    )
}

export default SocialMediaAccounts
