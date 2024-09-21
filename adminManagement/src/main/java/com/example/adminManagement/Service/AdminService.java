package com.example.adminManagement.Service;

import com.example.adminManagement.Entity.Activity;
import com.example.adminManagement.Entity.ActivityRepository;
import com.example.adminManagement.Entity.Location;
import com.example.adminManagement.Entity.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private ActivityRepository activityRepository;
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    public Location getLocationByName(String name) {
        return locationRepository.getLocationByName(name);
    }

    public Location addLocation(Location location) {
        return locationRepository.save(location);
    }

    public Location updateLocation(Location location) {
        return locationRepository.save(location);
    }

    public void deleteLocation(int id) {
        locationRepository.deleteById(id);
    }

    public int getNumberOfLocations() {
        return locationRepository.getNumberOfLocations();
    }

    public Activity addActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public List<Activity> findActivityByDestinationName(String name) {
        return activityRepository.findActivityByDestinationName(name);
    }

    public Activity updateActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public void deleteActivityById(int id) {
        activityRepository.deleteById(id);
    }
}
