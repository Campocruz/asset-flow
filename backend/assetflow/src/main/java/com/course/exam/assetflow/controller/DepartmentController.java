package com.course.exam.assetflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.course.exam.assetflow.repository.DepartmentRepository;

@Controller
@RequestMapping("/departments")
public class DepartmentController {

  @Autowired
  private DepartmentRepository departmentRepository;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("departments", departmentRepository.findAll());
    return "department/index";
  }
}
