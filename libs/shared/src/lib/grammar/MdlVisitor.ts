// Generated from libs/shared/src/lib/grammar/Mdl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./MdlParser";
import { TrebleStaffContext } from "./MdlParser";
import { BassStaffContext } from "./MdlParser";
import { BarContext } from "./MdlParser";
import { PitchContext } from "./MdlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MdlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MdlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MdlParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `MdlParser.trebleStaff`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrebleStaff?: (ctx: TrebleStaffContext) => Result;

	/**
	 * Visit a parse tree produced by `MdlParser.bassStaff`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBassStaff?: (ctx: BassStaffContext) => Result;

	/**
	 * Visit a parse tree produced by `MdlParser.bar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBar?: (ctx: BarContext) => Result;

	/**
	 * Visit a parse tree produced by `MdlParser.pitch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPitch?: (ctx: PitchContext) => Result;
}

