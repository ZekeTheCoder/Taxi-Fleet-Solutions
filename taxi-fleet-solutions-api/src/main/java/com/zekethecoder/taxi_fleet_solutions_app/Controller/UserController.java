package com.zekethecoder.taxi_fleet_solutions_app.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping("/getUser")
    public String getUserById(){
        return "user api";
    }
}
