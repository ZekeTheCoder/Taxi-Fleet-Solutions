package com.zekethecoder.taxi_fleet_solutions_app.Repository;

import com.zekethecoder.taxi_fleet_solutions_app.Entity.Admin;
import com.zekethecoder.taxi_fleet_solutions_app.Entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense,Integer> {
}
