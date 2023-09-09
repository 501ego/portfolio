import { Image } from '@nextui-org/react'
import { LeftArrowIcon, RightArrowIcon } from '../../public/icons'
import React, { useState } from 'react'

const ProjectImage = ({
  image,
  bigImage,
  altDescription,
  prevSlide,
  nextSlide,
}) => {
  const [showBigImage, setShowBigImage] = useState(false)

  const handleClick = () => {
    setShowBigImage(true)
  }

  const handleClose = () => {
    setShowBigImage(false)
  }

  return (
    <div aria-label="projects screenshots" className="relative p-1 group">
      <div
        onClick={handleClick}
        className="cursor-pointer max-h-[200px] min-h-[188px] min-w-[196px]"
      >
        <Image
          aria-label="Project screenshot Small Image"
          quality={40}
          priority={false}
          alt={altDescription}
          src={image}
          width={320}
          height={200}
          className="fadein border border-zinc-400 rounded-md min-h-[188px]"
        />
        <button
          onClick={prevSlide}
          className="z-50 hidden group-hover:block absolute top-[50%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          aria-label="Previous Slide"
        >
          <LeftArrowIcon size={30} />
        </button>
        <button
          onClick={nextSlide}
          size={30}
          className="z-50 hidden group-hover:block absolute top-[50%] translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          aria-label="Next Slide"
        >
          <RightArrowIcon />
        </button>
      </div>

      {showBigImage && (
        <div
          onClick={handleClose}
          className="fixed inset-0 col-center bg-black bg-opacity-50 z-50"
          aria-modal="true"
        >
          <Image
            aria-label="Project screenshot Big Image"
            quality={65}
            priority={false}
            removeWrapper
            alt={altDescription}
            src={bigImage}
            width={1200}
            height={890}
          />
        </div>
      )}
    </div>
  )
}

ProjectImage.displayName = 'ProjectImage'

export default ProjectImage
