import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SocialShareButtons = ({ url, title, shareWord }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="post-share-buttons-container">
      <p className="post-share-heading">{shareWord}</p>
      <div className="social-share-buttons flex mt-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebookF size={20} color="#EC2227" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600"
        >
          <FaXTwitter  size={20} color="#EC2227" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedinIn size={20} color="#EC2227" />
        </a>
      </div>
    </div>
  );
};

export default SocialShareButtons;
