USE [practice]
GO
/****** Object:  StoredProcedure [dbo].[SelectEmployee]    Script Date: 11-Apr-23 4:51:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER Procedure [dbo].[SelectEmployee]    
as     
Begin    
Select EmployeeID,Name,Age,State,Country from Employee;    
End  