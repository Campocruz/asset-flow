package com.course.exam.assetflow.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "departments")
public class Department {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @NotBlank(message = "The code cannot be blank")
  @Size(max = 10)
  @Column(name = "code")
  private String code;

  @NotBlank(message = "The name cannot be blank")
  @Size(max = 100)
  @Column(name = "name")
  private String name;

  @Lob
  @Column(name = "description")
  private String description;

  @ManyToOne
  @JoinColumn(name = "building_id", nullable = false)
  @JsonBackReference
  private Building building;

  @ManyToMany
  @JoinTable(name = "department_machine", joinColumns = @JoinColumn(name = "department_id"), inverseJoinColumns = @JoinColumn(name = "machine_id"))
  @JsonIgnoreProperties("departments")
  private List<Machine> machines;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescrption(String description) {
    this.description = description;
  }

  public Building getBuilding() {
    return building;
  }

  public void setBuilding(Building building) {
    this.building = building;
  }

  public List<Machine> getMachines() {
    return machines;
  }

  public void setMachines(List<Machine> machines) {
    this.machines = machines;
  }

}
