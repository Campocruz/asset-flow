package com.course.exam.assetflow.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.exam.assetflow.model.Department;
import com.course.exam.assetflow.model.Machine;
import com.course.exam.assetflow.service.MachineService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/machines")
public class MachineRestController {

  @Autowired
  private MachineService machineService;

  @GetMapping
  public List<Machine> index() {
    return machineService.findAllMachine();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Machine> show(@PathVariable Integer id) {
    if (machineService.machineExist(id)) {
      return new ResponseEntity<>(machineService.getMachineById(id), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PostMapping
  public ResponseEntity<Machine> store(@Valid @RequestBody Machine machine) {
    return new ResponseEntity<>(machineService.setMachine(machine), HttpStatus.OK);
  }

  @PutMapping("/{id}")
  public ResponseEntity<Machine> update(@Valid @RequestBody Machine machine, @PathVariable Integer id) {
    machine.setId(id);
    if (machineService.machineExist(id)) {
      return new ResponseEntity<>(machineService.setMachine(machine), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Machine> delete(@PathVariable Integer id) {
    if (machineService.machineExist(id)) {
      Machine machineToDelete = machineService.getMachineById(id);
      for (Department depart : machineToDelete.getDepartments()) {
        depart.getMachines().remove(machineToDelete);
      }
      machineService.deleteMachineById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
