package com.course.exam.assetflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.course.exam.assetflow.repository.BuildingRepository;

@Controller
@RequestMapping("/buildings")
public class BuildingController {

  @Autowired
  private BuildingRepository buildingRepository;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("buildings", buildingRepository.findAll());
    return "building/index";
  }

}
