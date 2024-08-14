import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'gatsby';

const BlogCard = ({ item }) => {
  const intl = useIntl();

  return (
    <div className="blog-card bg-[#1c1c1c] rounded-lg overflow-hidden group transition-all duration-300 ease-in-out">
      <img 
        className="w-full h-48 object-cover" 
        src={item.imgUrl} 
        alt={item.title || intl.formatMessage({ id: 'blogCard.defaultImageAlt', defaultMessage: 'Blog post image' })} 
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
        <p className="text-gray-400 text-sm mb-4">
          {item.content.length > 150 
            ? `${item.content.substring(0, 150)}...` 
            : item.content}
        </p>
        <div className="absolute bottom-0 left-0 right-0 bg-[#1c1c1c] p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out BlogCard-button-card">
          <Link 
to={`../blog-detail/?slug=${item.url}`}
className="inline-flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-300 ease-in-out"
            aria-label={intl.formatMessage(
              { id: 'blogCard.readMoreAriaLabel', defaultMessage: 'Read more about {title}' },
              { title: item.title }
            )}
          >
            <FormattedMessage id="blogCard.readMore" defaultMessage="Read more" />
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;