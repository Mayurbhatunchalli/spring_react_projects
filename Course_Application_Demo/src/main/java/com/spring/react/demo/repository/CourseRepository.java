package com.spring.react.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.react.demo.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
