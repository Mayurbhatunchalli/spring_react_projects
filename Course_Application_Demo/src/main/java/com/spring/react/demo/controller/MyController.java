package com.spring.react.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.spring.react.demo.entity.Course;
import com.spring.react.demo.service.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	
	@GetMapping("/courses")
	@CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.GET)
	public List<Course> getCourses() {
		
		return this.courseService.getCourse();
	}
	
	@GetMapping("/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.GET)
	public Course getCourse(@PathVariable String id) {
		
		return this.courseService.getCourse(Long.parseLong(id));
	}
	
	@PostMapping("/courses")
	@CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.POST)
	public Course addCourse(@RequestBody Course course) {
		
		return this.courseService.addCourse(course);
	}
	
	@PutMapping("/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.PUT)
	public Course updateCourse(@RequestBody Course course, @PathVariable int id) {
		
		return this.courseService.updateCourse(course,id);
	}
	
	@DeleteMapping("/courses/{id}")
	@CrossOrigin(origins = "http://localhost:3000",methods = RequestMethod.DELETE)
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String id) {
		
		try {
			this.courseService.deleteCourse(Long.parseLong(id));
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<HttpStatus>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

}
