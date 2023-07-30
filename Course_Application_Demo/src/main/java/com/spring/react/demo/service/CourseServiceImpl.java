package com.spring.react.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.react.demo.entity.Course;
import com.spring.react.demo.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	List<Course> list;
	
	@Autowired
	private CourseRepository courseRepo;
	
	public CourseServiceImpl() {
		
//		list = new ArrayList<>();
//		list.add(new Course(100, "Java", "Spring Framework"));
//		list.add(new Course(101, "Python", "OpenCV"));
	}



	@Override
	public List<Course> getCourse() {
		
		return courseRepo.findAll();
	}



	@Override
	public Course getCourse(long id) {
		
//		Course c = null;
//		
//		for(Course course : list) {
//			
//			if(course.getId() == id) {
//				
//				c = course;
//				break;
//			}
//		}
//		
//		return c;
			
		return courseRepo.getOne(id);
	}



	@Override
	public Course addCourse(Course course) {
		
		return courseRepo.save(course);
	}

	@Override
	public Course updateCourse(Course course, int id) {
		
//		list.forEach( e -> {
//			
//			if (e.getId() == course.getId()) {
//				e.setTitle(course.getTitle());
//				e.setDescription(course.getDescription());	
//			}
//		});
//		
//		return course;
		
		return courseRepo.save(course);
	}



	@Override
	public void deleteCourse(long id) {

		//list = this.list.stream().filter(e -> e.getId()!=id).collect(Collectors.toList());
		try {
			Course course = courseRepo.getOne(id);
			courseRepo.delete(course);
		} catch(Exception e) {
			
			e.printStackTrace();
		}
	}

}
