package com.gs.service.impl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.http.HttpStatus;
import org.apache.log4j.Logger;
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;

import com.gs.service.dao.SprintDetailsDao;
import com.gs.service.dto.SprintDetailsDto;

@Path("/burnDownChart")
public class ManageBurnDownChartServiceImpl {
	private static Logger log = Logger.getLogger(ManageBurnDownChartServiceImpl.class);
	@GET
	@Path("/get")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSprintRecord(@Context HttpServletRequest request) {
		log.info("inside getSprintRecord method to get sprint record");
		JSONArray jsonArray1 = new JSONArray();
		JSONArray jsonArray2 = new JSONArray();
		JSONArray jsonArray3 = new JSONArray();
		JSONObject json1 = null;
		JSONObject json2 = null;
		JSONObject json3 = null;
		String releaseId = request.getParameter("releaseId");
		try{
			SprintDetailsDao sprintDetailsDao = SprintDetailsDao.getInstatnce();
			List<SprintDetailsDto> sprintRecordList = sprintDetailsDao.getSprintRecordForSpecifiedRelease(releaseId);
			for (int count = 0; count < sprintRecordList.size(); count++) {
				SprintDetailsDto sprintDetailsDto = sprintRecordList.get(count);
				json1 = new JSONObject();
				json2 = new JSONObject();
				json3 = new JSONObject();
				
				
				json1.put("label", sprintDetailsDto.getSprintName());
				jsonArray1.put(json1);
				json2.put("value", sprintDetailsDto.getSprintStartDate());
				jsonArray2.put(json2);
				json3.put("value", sprintDetailsDto.getSprintStartDate());
				jsonArray3.put(json3);
			}
			JSONArray jsonAllArray = new JSONArray();
			jsonAllArray.put(jsonArray1);
			jsonAllArray.put(jsonArray2);
			jsonAllArray.put(jsonArray3);
			
			return Response.status(HttpStatus.SC_OK).entity(jsonAllArray).build();
		}catch(Exception ex){
			ex.printStackTrace();
			log.error("exception inside getSprintRecord method :: ",ex);
			return Response.status(HttpStatus.SC_SERVICE_UNAVAILABLE).entity("Service unavailable").build();
		}
	}

}
