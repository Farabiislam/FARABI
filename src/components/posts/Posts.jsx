import Post from "../post_functionalities/post";
import "./post.scss"

const Posts = () => {

const posts = [
  {
    id: 1,
    name: "Farabi Islam",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5881613/pexels-photo-5881613.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    name: "Farabi Islam",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  },
  {
    id: 3,
    name: "Farabi Islam",
    userId: 3,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781617/pexels-photo-5781617.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "Farabi Islam",
    userId: 4,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5881618/pexels-photo-5881618.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    name: "Farabi Islam",
    userId: 5,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore. Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
  },
  {
    id: 6,
    name: "Farabi Islam",
    userId: 6,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781615/pexels-photo-5781615.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    name: "Farabi Islam",
    userId: 7,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781614/pexels-photo-5781614.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    name: "Farabi Islam",
    userId: 8,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781619/pexels-photo-5781619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 9,
    name: "Farabi Islam",
    userId: 9,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781637/pexels-photo-5781637.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 10,
    name: "Farabi Islam",
    userId: 10,
    profilePic:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    img: "https://images.pexels.com/photos/5781639/pexels-photo-5781639.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

  return (
    <div className="posts">
      {
        posts.map(post=>(
          <Post post={post} key={post.id} />
        ))
      }
    
    </div>
  )
}

export default Posts