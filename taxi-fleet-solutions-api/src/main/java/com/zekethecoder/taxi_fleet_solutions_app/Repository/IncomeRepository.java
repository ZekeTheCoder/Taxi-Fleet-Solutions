package com.zekethecoder.taxi_fleet_solutions_app.Repository;

import com.zekethecoder.taxi_fleet_solutions_app.Entity.Expense;
import com.zekethecoder.taxi_fleet_solutions_app.Entity.Income;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncomeRepository extends JpaRepository<Income,Integer> {
}
