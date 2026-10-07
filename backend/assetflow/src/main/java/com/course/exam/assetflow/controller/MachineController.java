package com.course.exam.assetflow.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.course.exam.assetflow.repository.MachineRepository;

@Controller
@RequestMapping("/machines")
public class MachineController {

  @Autowired
  private MachineRepository machineRepository;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("machines", machineRepository.findAll());
    return "machine/index";
  }
}
