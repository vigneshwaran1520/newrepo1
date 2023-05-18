using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using AjaxCrudMVC.Models;

namespace AjaxCrudMVC.Controllers
{
    public class HomeController : Controller
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["sqlcon"].ConnectionString);
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List()
        {
            List<ViewEmployeeModel> list = new List<ViewEmployeeModel>();
            try
            {

                using (con)
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = "SelectEmployeeup";
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = con;
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        ViewEmployeeModel model = new ViewEmployeeModel();
                        model.EmployeeID = reader["EmployeeID"].GetHashCode();
                        model.Name = reader["Name"].ToString();
                        model.Age = reader["Age"].GetHashCode();
                        model.State = reader["State"].ToString();
                        model.Country = reader["Country"].ToString();

                        list.Add(model);
                    }
                    con.Close();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(ViewEmployeeModel emp)
        {
            try
            {

                using (con)
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = "InsertUpdateEmployee";
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", emp.EmployeeID);
                    cmd.Parameters.AddWithValue("@Name", emp.Name);
                    cmd.Parameters.AddWithValue("@Age", emp.Age);
                    cmd.Parameters.AddWithValue("@State", emp.State);
                    cmd.Parameters.AddWithValue("@Country", emp.Country);
                    cmd.Parameters.AddWithValue("@Action", emp.Action);

                    cmd.Connection = con;
                    con.Open();
                    int ac = cmd.ExecuteNonQuery();

                    con.Close();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return Json("success", JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetbyId(ViewEmployeeModel modeldata)
        {

            try
            {
                ViewEmployeeModel model = null;

                using (con)
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = "SelectEmployee1";
                    cmd.Parameters.AddWithValue("@EmployeeID", modeldata.EmployeeID);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = con;
                    con.Open();
                    SqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        model = new ViewEmployeeModel();
                        model.EmployeeID = reader["EmployeeID"].GetHashCode();
                        model.Name = reader["Name"].ToString();
                        model.Age = reader["Age"].GetHashCode();
                        model.State = reader["State"].ToString();
                        model.Country = reader["Country"].ToString();


                    }
                    con.Close();
                    return Json(model, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
        public JsonResult Update(ViewEmployeeModel emp)
        {
            try
            {

                using (con)
                {
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = "InsertUpdateEmployee";
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", emp.EmployeeID);
                    cmd.Parameters.AddWithValue("@Name", emp.Name);
                    cmd.Parameters.AddWithValue("@Age", emp.Age);
                    cmd.Parameters.AddWithValue("@State", emp.State);
                    cmd.Parameters.AddWithValue("@Country", emp.Country);
                    cmd.Parameters.AddWithValue("@Action", emp.Action);

                    cmd.Connection = con;
                    con.Open();
                    int ac = cmd.ExecuteNonQuery();

                    con.Close();
                }

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            return Json("success", JsonRequestBehavior.AllowGet);
        }

        public ActionResult Delete(int EmployeeID)
        {

            try
            {

                using (con)
                {
                    con.Open();
                    SqlCommand cmd = new SqlCommand();
                    cmd.CommandText = "DeleteEmployee";
                    cmd.Parameters.AddWithValue("@Id", EmployeeID);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Connection = con;
                    cmd.ExecuteNonQuery();


                    con.Close();
                    return Json(true, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }

}
















