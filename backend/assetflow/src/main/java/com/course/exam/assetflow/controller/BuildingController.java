package com.course.exam.assetflow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.course.exam.assetflow.model.Building;
import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.repository.BuildingRepository;
import com.course.exam.assetflow.repository.DepartmentRepository;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/buildings")
public class BuildingController {

  @Autowired
  private BuildingRepository buildingRepository;

  @Autowired
  private DepartmentRepository departmentRepository;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("buildings", buildingRepository.findAll());
    return "building/index";
  }

  @GetMapping("/{id}")
  public String show(@PathVariable Integer id, Model model) {
    model.addAttribute("building", buildingRepository.findById(id).get());
    return "";
  }

  @GetMapping("/create")
  public String create(Model model) {
    model.addAttribute("building", new Building());
    model.addAttribute("typePage", false);
    return "building/edit-or-create";
  }

  @PostMapping("/create")
  public String create(@Valid @ModelAttribute("building") Building formBuilding, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", false);
    if (bindingResult.hasErrors()) {
      return "building/edit-or-create";
    }

    buildingRepository.save(formBuilding);
    return "redirect:/buildings";
  }

  @GetMapping("/edit/{id}")
  public String edit(@PathVariable Integer id, Model model) {
    model.addAttribute("building", buildingRepository.findById(id).get());
    model.addAttribute("typePage", true);
    return "building/edit-or-create";
  }

  @PostMapping("/edit/{id}")
  public String edit(@Valid @ModelAttribute("building") Building formBuilding, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", true);
    if (bindingResult.hasErrors()) {
      return "building/edit-or-create";
    }

    buildingRepository.save(formBuilding);
    return "redirect:/buildings";
  }

  @PostMapping("/delete/{id}")
  public String delete(@PathVariable Integer id) {
    Building buildingToDelete = buildingRepository.findById(id).get();
    List<Department> departmentToDelete = buildingToDelete.getDepartments();
    for (Department department : departmentToDelete) {
      departmentRepository.delete(department);
    }
    buildingRepository.delete(buildingToDelete);
    return "redirect:/buildings";
  }

}
