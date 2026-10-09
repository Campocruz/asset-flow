package com.course.exam.assetflow.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.service.DepartmentService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/departments")
public class DepartmentController {

  @Autowired
  private DepartmentService departmentService;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("departments", departmentService.findAllDepartment());
    return "department/index";
  }

  @GetMapping("/{id}")
  public String show(@PathVariable Integer id, Model model) {
    model.addAttribute("department", departmentService.getDepartmentById(id));
    return "";
  }

  @GetMapping("/create")
  public String create(Model model) {
    model.addAttribute("department", new Department());
    model.addAttribute("typePage", false);
    return "department/edit-or-create";
  }

  @PostMapping("/create")
  public String create(@Valid @ModelAttribute("department") Department formDepartment, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", false);
    if (bindingResult.hasErrors()) {
      return "department/edit-or-create";
    }

    departmentService.setDepartment(formDepartment);
    return "redirect:/departments";
  }

  @GetMapping("/edit/{id}")
  public String edit(@PathVariable Integer id, Model model) {
    model.addAttribute("department", departmentService.getDepartmentById(id));
    model.addAttribute("typePage", true);
    return "department/edit-or-create";
  }

  @PostMapping("/edit/{id}")
  public String edit(@Valid @ModelAttribute("department") Department formDepartment, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", true);
    if (bindingResult.hasErrors()) {
      return "department/edit-or-create";
    }

    departmentService.setDepartment(formDepartment);
    return "redirect:/departments";
  }

  @PostMapping("/delete/{id}")
  public String delete(@PathVariable Integer id) {
    departmentService.deleteDepartmentById(id);
    return "redirect:/departments";
  }
}
