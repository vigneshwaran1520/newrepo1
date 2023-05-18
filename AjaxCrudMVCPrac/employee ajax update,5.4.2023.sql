use[practice]
go
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE usp_EmployeeEdit
	@EmployeeID int
AS
BEGIN
	Select EmployeeID,Name,Age,State,Country from Employee where EmployeeID=@EmployeeID  
END
GO
