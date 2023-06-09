USE [practice]
GO
/****** Object:  StoredProcedure [dbo].[InsertUpdateEmployee]    Script Date: 05-04-2023 17:50:43 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER Procedure [dbo].[InsertUpdateEmployee]    
(    
@Id integer,    
@Name nvarchar(50),    
@Age integer,    
@State nvarchar(50),    
@Country nvarchar(50),    
@Action varchar(10)    
)    
As    
Begin    
if @Action='Insert'    
Begin    
 Insert into Employee(Name,Age,[State],Country) values(@Name,@Age,@State,@Country);    
End    
if @Action='Update'    
Begin    
 Update Employee set Name=@Name,Age=@Age,[State]=@State,Country=@Country where EmployeeID=@Id;    
End      
End  


