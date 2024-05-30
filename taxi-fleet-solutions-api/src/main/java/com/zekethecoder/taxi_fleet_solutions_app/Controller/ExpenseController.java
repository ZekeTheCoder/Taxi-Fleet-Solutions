package com.zekethecoder.taxi_fleet_solutions_app.Controller;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {
//  GET /expenses: Retrieve all expenses.
    @GetMapping("/allExpenses")
    public String getAdmin(){
    return "all expenses";
}

//  GET /expenses/{id}: Retrieve a specific expense by ID.
    @GetMapping("/expenses/{expense_id}")
    public String getExpenseByID(){
    return "specific expense";
}
//    POST /expenses/createExpense: Create a new expense.
//    @PostMapping("/createProject")
//    public Integer createProject(@RequestBody Project project) throws InvalidArgument, MessagingException, IOException {
//        return projectService.createProject(project);
//    }
//            PUT /expenses/{id}: Update an existing expense.
//    DELETE /expenses/{id}: Delete an expense by ID.

}
