package com.course.exam.assetflow.controller;

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
import com.course.exam.assetflow.service.BuildingService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/buildings")
public class BuildingController {

  @Autowired
  private BuildingService buildingService;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("buildings", buildingService.findAllBuilding());
    return "building/index";
  }

  @GetMapping("/{id}")
  public String show(@PathVariable Integer id, Model model) {
    model.addAttribute("building", buildingService.getBuildingById(id));
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

    buildingService.setBuilding(formBuilding);
    return "redirect:/buildings";
  }

  @GetMapping("/edit/{id}")
  public String edit(@PathVariable Integer id, Model model) {
    model.addAttribute("building", buildingService.getBuildingById(id));
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

    buildingService.setBuilding(formBuilding);
    return "redirect:/buildings";
  }

  @PostMapping("/delete/{id}")
  public String delete(@PathVariable Integer id) {
    buildingService.deleteBuildingById(id);
    return "redirect:/buildings";
  }

}
