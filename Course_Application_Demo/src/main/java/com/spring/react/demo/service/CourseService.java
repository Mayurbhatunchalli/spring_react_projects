package com.spring.react.demo.service;

import java.util.List;

import com.spring.react.demo.entity.Course;

public interface CourseService {
	
	public List<Course> getCourse();

	public Course getCourse(long id);
	
	public Course addCourse(Course course);

	public void deleteCourse(long id);

	public Course updateCourse(Course course, int id);

}
