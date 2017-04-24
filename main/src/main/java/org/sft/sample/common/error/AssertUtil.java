package org.sft.sample.common.error;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class AssertUtil {
	private static final Logger log=LogManager.getLogger();

	public static void error(ApplicationErrorCode errorCode,String... formats) {
		if(formats.length>0){
			errorCode.setMessage(String.format(errorCode.getMessage(), formats));
		}
		RuntimeException exception=new ApplicationException(errorCode);
		log.error(errorCode.getMessage(),exception);
		throw exception;
	}
	
	public static void isTrue(boolean cnd,ApplicationErrorCode errorCode,String... formats){
		if(!cnd){
			error(errorCode, formats);
		}
		
	}
	
	
	
	
	
}