import { Image } from '@nextui-org/react'
import { LeftArrowIcon, RightArrowIcon } from '../../public/icons'
import React, { useState } from 'react'

const ProjectImage = ({ image, prevSlide, nextSlide }) => {
  const [showBigImage, setShowBigImage] = useState(false)

  const handleClick = () => {
    setShowBigImage(true)
  }

  const handleClose = () => {
    setShowBigImage(false)
  }

  return (
    <div aria-label="card images" className="relative p-1 resize group">
      <div
        onClick={handleClick}
        className="cursor-pointer max-h-[200px] min-h-[188px] min-w-[196px] "
      >
        <Image
          loading="lazy"
          alt="Project Screenshot"
          src={image}
          width={320}
          className="fadein border border-zinc-700 rounded-md min-h-[188px]"
        />
        <button
          onClick={() => {
            prevSlide()
          }}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <LeftArrowIcon size={30} />
        </button>
        <button
          onClick={() => {
            nextSlide()
          }}
          size={30}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <RightArrowIcon />
        </button>
      </div>

      {showBigImage && (
        <div
          onClick={handleClose}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <Image
            alt="Project Screenshot"
            className="object-cover max-w-[calc(75dvw)] rounded-md"
            src={image}
          />
        </div>
      )}
    </div>
  )
}

ProjectImage.displayName = 'ProjectImage'

export default ProjectImage
