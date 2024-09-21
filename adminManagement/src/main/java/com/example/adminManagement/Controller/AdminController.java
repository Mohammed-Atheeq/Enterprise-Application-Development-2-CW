package com.example.adminManagement.Controller;

import com.example.adminManagement.Entity.Activity;
import com.example.adminManagement.Entity.Location;
import com.example.adminManagement.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping(path = "/locations")
    public List<Location> getAllLocations(){
        return adminService.getAllLocations();
    }

    @GetMapping(path = "/locations", params = "name")
    public Location getLocationByName(String name){
        return adminService.getLocationByName(name);
    }
    @PostMapping(path = "/locations")
    public Location addLocation(@RequestBody Location location)
    {
        return adminService.addLocation(location);
    }
    @PutMapping(path = "/locations/{id}")
    public Location updateLocation(@RequestBody Location location)
    {
        return adminService.updateLocation(location);
    }

    @DeleteMapping(path = "/locations/{id}")
    public void deleteLocation(@PathVariable int id){
        adminService.deleteLocation(id);
    }
    @GetMapping(path = "/locations/num")
    public int getNumberOfLocations(){
        return adminService.getNumberOfLocations();
    }


    @PostMapping(path = "/activities")
    public Activity addActivity(@RequestBody Activity activity)
    {
        return adminService.addActivity(activity);
    }

    @GetMapping(path = "/activities")
    public List<Activity> getAllActivities(){
        return adminService.getAllActivities();
    }

    @GetMapping(path = "/activities", params = "name")
    public List<Activity> findActivityByDestinationName(String name){
        return adminService.findActivityByDestinationName(name);
    }

    @PutMapping(path = "/activities/{id}")
    public Activity updateActivity(@RequestBody Activity activity){
        return adminService.updateActivity(activity);
    }

    @DeleteMapping(path = "/activities/{id}")
    public void deleteActivityById(@PathVariable int id){
        adminService.deleteActivityById(id);
    }
}
