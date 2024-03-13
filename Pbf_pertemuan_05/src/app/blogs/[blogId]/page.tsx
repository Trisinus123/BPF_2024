type Props = {
    params: {
          blogId: string
    }
  }
  
  export default function blogDetails({ params }: Props) {
    return (
          <h1>{params.blogId} Blog</h1>
    )
  }
  
