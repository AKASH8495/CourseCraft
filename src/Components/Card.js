import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourse, setLikedCourse }) {


      const clickHandler = () => {
            if (likedCourse.includes(course.id)) {
              // Course is already liked, remove it from likedCourse array
              setLikedCourse(prev => prev.filter(cid => cid !== course.id));
              toast.warning('Liked removed');
            } else {
              // Course is not liked, add it to likedCourse array
              setLikedCourse(prev => [...prev, course.id]);
              toast.success('Liked Successfully');
            }
          };



      return (
            <div className="w-[300px] bg-slate-600 rounded-[10px] overflow-hidden">
                  <div className="relative">
                        <img src={course.image.url}></img>

                        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-[-12px] grid place-items-center">
                              <button onClick={clickHandler}>

                                    {likedCourse.includes(course.id) ? (<FcLike fontSize={"1.75rem"}/>) : (<FcLikePlaceholder fontSize={"1.75rem"}/>)}
                                    
                              </button>
                        </div>

                  </div>




                  <div className="p-4">
                        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                        <p className="mt-2 text-white">{course.description}

                        {
                        course.description.length > 20 ? (course.description.substr(0,5)) + '...': (course.description)
                        
                        
                        }
                        
                        
                        
                        </p>
                  </div>

            </div>
      )
}

export default Card;