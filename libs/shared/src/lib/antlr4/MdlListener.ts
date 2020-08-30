// Generated from libs/shared/src/grammar/Mdl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./MdlParser";
import { TrebleStaffContext } from "./MdlParser";
import { BarContext } from "./MdlParser";
import { PitchContext } from "./MdlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MdlParser`.
 */
export interface MdlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MdlParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `MdlParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `MdlParser.trebleStaff`.
	 * @param ctx the parse tree
	 */
	enterTrebleStaff?: (ctx: TrebleStaffContext) => void;
	/**
	 * Exit a parse tree produced by `MdlParser.trebleStaff`.
	 * @param ctx the parse tree
	 */
	exitTrebleStaff?: (ctx: TrebleStaffContext) => void;

	/**
	 * Enter a parse tree produced by `MdlParser.bar`.
	 * @param ctx the parse tree
	 */
	enterBar?: (ctx: BarContext) => void;
	/**
	 * Exit a parse tree produced by `MdlParser.bar`.
	 * @param ctx the parse tree
	 */
	exitBar?: (ctx: BarContext) => void;

	/**
	 * Enter a parse tree produced by `MdlParser.pitch`.
	 * @param ctx the parse tree
	 */
	enterPitch?: (ctx: PitchContext) => void;
	/**
	 * Exit a parse tree produced by `MdlParser.pitch`.
	 * @param ctx the parse tree
	 */
	exitPitch?: (ctx: PitchContext) => void;
}

