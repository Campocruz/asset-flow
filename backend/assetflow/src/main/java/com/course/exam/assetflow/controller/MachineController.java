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

import com.course.exam.assetflow.model.Machine;
import com.course.exam.assetflow.service.MachineService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/machines")
public class MachineController {

  @Autowired
  private MachineService machineService;

  @GetMapping
  public String index(Model model) {
    model.addAttribute("machines", machineService.findAllMachine());
    return "machine/index";
  }

  @GetMapping("/{id}")
  public String show(@PathVariable Integer id, Model model) {
    model.addAttribute("machine", machineService.getMachineById(id));
    return "";
  }

  @GetMapping("/create")
  public String create(Model model) {
    model.addAttribute("machine", new Machine());
    model.addAttribute("typePage", false);
    return "machine/edit-or-create";
  }

  @PostMapping("/create")
  public String create(@Valid @ModelAttribute("machine") Machine formMachine, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", false);
    if (bindingResult.hasErrors()) {
      return "machine/edit-or-create";
    }
    machineService.setMachine(formMachine);
    return "redirect:/machines";
  }

  @GetMapping("/edit/{id}")
  public String edit(@PathVariable Integer id, Model model) {
    model.addAttribute("machine", machineService.getMachineById(id));
    model.addAttribute("typePage", true);
    return "machine/edit-or-create";
  }

  @PostMapping("/edit/{id}")
  public String edit(@Valid @ModelAttribute("machine") Machine formMachine, BindingResult bindingResult,
      Model model) {
    model.addAttribute("typePage", true);
    if (bindingResult.hasErrors()) {
      return "machines/edit-or-create";
    }

    machineService.setMachine(formMachine);
    return "redirect:/machines";
  }

  @PostMapping("/delete/{id}")
  public String delete(@PathVariable Integer id) {
    machineService.deleteMachineById(id);
    return "redirect:/machines";
  }
}
