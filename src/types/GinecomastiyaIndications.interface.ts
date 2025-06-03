export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  title: string
}

export interface IGinecomastiyaIndications {
  title: string
  description: string
  images: GalleryImage[]
  sections: {
    title: string
    content: string
    images: GalleryImage[]
  }[]
}
