package com.zekethecoder.taxi_fleet_solutions_app.Repository;

import com.zekethecoder.taxi_fleet_solutions_app.Entity.Income;
import com.zekethecoder.taxi_fleet_solutions_app.Entity.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalaryRepository extends JpaRepository<Salary,Integer> {
}
