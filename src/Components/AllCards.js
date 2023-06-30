import { useState } from "react";
import Card from "./Card";

function AllCards({ courses, category }) {
      const [likedCourse, setLikedCourse] = useState([]);

      const getCourses = () => {

            if (category === 'All') {

                  let allCourse = [];

                  if (courses) {
                        Object.values(courses).forEach((courseCategory) => {
                              courseCategory.forEach((course) => {
                                    allCourse.push(course);
                              });
                        });
                  }

                  return allCourse;

            }
            else{
                  return courses[category];
            }

      };


      return (
            <div className="flex flex-wrap justify-center gap-4 mb-4">
                  {getCourses().map((course) => (
                        <Card key={course.id} course={course} likedCourse={likedCourse || []} setLikedCourse={setLikedCourse} />

                  ))}
            </div>
      );
}

export default AllCards;
